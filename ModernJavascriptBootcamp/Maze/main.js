const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsHorizontal = 14;
const cellsVertical = 14;
const width = window.innerWidth - 50;
const height = window.innerHeight - 50;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: width,
    height: height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 5, {
    isStatic: true,
    render: {
      fillStyle: "brown",
    },
  }),
  Bodies.rectangle(width / 2, height, width, 5, {
    isStatic: true,
    render: {
      fillStyle: "brown",
    },
  }),
  Bodies.rectangle(0, height / 2, 5, height, {
    isStatic: true,
    render: {
      fillStyle: "brown",
    },
  }),
  Bodies.rectangle(width, height / 2, 5, height, {
    isStatic: true,
    render: {
      fillStyle: "brown",
    },
  }),
];
World.add(world, walls);

//Maze Generation
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsVertical - 1).fill(false));

const horizontals = Array(cellsHorizontal - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const buildMaze = (row, column) => {
  if (grid[row][column]) {
    return;
  }
  grid[row][column] = true;

  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue;
    }

    if (grid[nextRow][nextColumn]) {
      continue;
    }

    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    buildMaze(nextRow, nextColumn);
  }
};

buildMaze(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "brown",
        },
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "brown",
        },
      }
    );
    World.add(world, wall);
  });
});

//Goal
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.4,
  unitLengthY * 0.4,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: "gold",
    },
  }
);

World.add(world, goal);

//Player
const radius = Math.min(unitLengthX, unitLengthY) / 4;
const player = Bodies.circle(unitLengthX / 2, unitLengthY / 2, radius, {
  label: "player",
  render: {
    fillStyle: "lightblue",
  },
});
World.add(world, player);

document.addEventListener("keydown", (event) => {
  const { x, y } = player.velocity;
  //Up
  if (event.keyCode === 87) {
    Body.setVelocity(player, { x: 0, y: y - 5 });
  }
  //Right
  if (event.keyCode === 68) {
    Body.setVelocity(player, { x: x + 5, y: 0 });
  }
  //Down
  if (event.keyCode === 83) {
    Body.setVelocity(player, { x: 0, y: y + 5 });
  }
  //Left
  if (event.keyCode === 65) {
    Body.setVelocity(player, { x: x - 5, y: 0 });
  }
});

const limitMaxSpeed = () => {
  let maxSpeed = 8;
  if (player.velocity.x > maxSpeed) {
    Body.setVelocity(player, { x: maxSpeed, y: player.velocity.y });
  }

  if (player.velocity.x < -maxSpeed) {
    Body.setVelocity(player, { x: -maxSpeed, y: player.velocity.y });
  }

  if (player.velocity.y > maxSpeed) {
    Body.setVelocity(player, { x: player.velocity.x, y: maxSpeed });
  }

  if (player.velocity.y < -maxSpeed) {
    Body.setVelocity(player, { x: player.velocity.x, y: -maxSpeed });
  }
};

Events.on(engine, "beforeUpdate", limitMaxSpeed);

//Win Condition
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["player", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector(".winner").classList.remove("hidden");
      document.querySelector("#restart").addEventListener("click", () => {
        document.location.reload();
      });
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});

// let colors = [
//   "green",
//   "purple",
//   "red",
//   "yellow",
//   "orange",
//   "blue",
//   "black",
//   "white",
//   "grey",
//   "brown",
//   "pink",
//   "cyan",
//   "darkgoldenrod",
//   "crimson",
// ];

// Random Shapes
// for (let i = 0; i < 50; i++) {
//   let randomColor = colors[Math.round(Math.random() * colors.length)];
//   if (Math.random() > 0.5) {
//     World.add(
//       world,
//       Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
//     );
//   } else {
//     World.add(
//       world,
//       Bodies.circle(Math.random() * width, Math.random() * height, 25, {
//         render: {
//           fillStyle: randomColor,
//         },
//       })
//     );
//   }
// }
