<template>
  <div class="win" v-if="gameStatus === 1">Congratulations! You won!</div>
  <h2>Level {{ level }}</h2>
  <div
    v-if="cells"
    class="board"
    :style="{ width: 50 * size + 'px', height: 50 * size + 'px' }"
  >
    <BoardItem
      v-for="(cell, index) in cells"
      :key="index"
      :icon-id="cell"
      :id="index"
      :selected="checkCell(index)"
      :closed="isClosed(index)"
      v-touch:press="touchDown(index)"
      v-touch:drag="touchMove()"
      v-touch:release="touchUp(index)"
    />
  </div>
  <div @click="reload()" class="reload">Reload</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BoardItem from "@/components/BoardItem";

let cells = ref([3, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 3]);
const path = ref([]);
const size = ref(4);
const closedPath = ref([]);
let level = ref(1);
const maxLevel = 2;
let gameStatus = ref(0);

const start = (level) => {
  if (level === 1) {
    cells.value = [3, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 3];
    size.value = 4;
  }

  if (level === 2) {
    cells.value = [
      0, 0, 4, 0, 2, 0, 1, 1, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 3, 4, 0,
    ];
    size.value = 5;
  }

  path.value = [];
  closedPath.value = [];
};

const reload = () => {
  start(level.value);
};

const checkLevel = () => {
  let completed = true;

  cells.value.forEach((cell, index) => {
    if (cell && !isClosed(index)) {
      completed = false;
    }
  });

  if (completed) {
    moveToNextLevel();
  }
};

const moveToNextLevel = () => {
  level.value += 1;
  gameStatus.value = 0;

  if (level.value > maxLevel) {
    level.value = 1;
    gameStatus.value = 1;
  }

  start(level.value);
};

const touchDown = (index) => {
  return function () {
    path.value = [];

    if (cells.value[index] && !isClosed(index)) {
      path.value.push(index);
    }
  };
};

const touchMove = () => {
  return function (event) {
    let touched = event.touches[0];
    let cell = document.elementFromPoint(touched.clientX, touched.clientY);
    let cellId = Number(cell.id);

    if (path.value.length) {
      const lastIndex = path.value[path.value.length - 1];

      if (
        (Math.abs(lastIndex - cellId) === 1 ||
          Math.abs(lastIndex - cellId) === size.value) &&
        !isClosed(cellId)
      ) {
        path.value.push(cellId);
      }

      if (
        isClosed(cellId) ||
        (cells.value[cellId] &&
          cells.value[cellId] !== cells.value[path.value[0]])
      ) {
        path.value = [];
      }
    }
  };
};

const touchUp = (index) => {
  return function () {
    let cellIndex = cells.value[path.value[path.value.length - 1]];

    if (
      path.value[path.value.length - 1] !== path.value[0] &&
      cells.value[index] === cellIndex
    ) {
      closedPath.value = closedPath.value.concat(path.value);
    }

    path.value = [];

    checkLevel();
  };
};

const mouseDown = (index) => {
  path.value = [];
  if (cells.value[index] && !isClosed(index)) {
    path.value.push(index);
  }
};

const mouseMove = (index) => {
  console.log('MOVE:', path.value);

  if (path.value.length) {
    const lastIndex = path.value[path.value.length - 1];
    if (
      (Math.abs(lastIndex - index) === 1 ||
        Math.abs(lastIndex - index) === size.value) &&
      !isClosed(index)
    ) {
      path.value.push(index);
    }

    if (
      isClosed(index) ||
      (cells.value[index] && cells.value[index] !== cells.value[path.value[0]])
    ) {
      path.value = [];
    }
  }
};

const mouseUp = (index) => {
  if (
    index !== path.value[0] &&
    cells.value[index] === cells.value[path.value[0]]
  ) {
    closedPath.value = closedPath.value.concat(path.value);
  }

  path.value = [];

  checkLevel();
};

const checkCell = (index) => {
  return path.value.findIndex((p) => p === index) > -1;
};

const isClosed = (index) => {
  return closedPath.value.findIndex((p) => p === index) > -1;
};

onMounted(() => {
  start(level.value);
});

</script>

<style>
.board {
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  height: 200px;
  margin: 24px auto;
  border: 2px solid #262727;
}

.reload {
  text-decoration: underline;
  cursor: pointer;
}

.win {
  font-weight: 600;
  margin-bottom: 32px;
}
</style>
