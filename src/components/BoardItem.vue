<template>
    <div :class="
        'board-item ' 
        + ( props.selected ? 'selected' : '' ) 
        + ( props.closed ? 'closed' : '' )
    ">
        <i v-if="iconId" :class="'icon icon-' + iconId"></i>
    </div>
</template>

<script setup>
const tes = () => {
    console.log('test')
}
const props = defineProps({
    iconId: {
        type: Number,
        required: false,
        default: 0
    },
    selected: {
        type: Boolean,
        required: false,
        default: false
    },
    closed: {
        type: Boolean,
        required: false,
        default: false
    }
});

</script>

<style>
.board-item {
    position: relative;
    border: 2px solid #262727;
    width: 96px;
    height: 96px;
    cursor: pointer;
}

.selected {
    background-color: #f56c6c;
}

.closed {
    background-color: #67c23a;
}

.icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.icon-1,
.icon-2,
.icon-3,
.icon-4 {
    background: url('../assets/icons.png');
    background-size: 300px 300px;
}

.icon-1 {
    background-position: 0 0;
}

.icon-2 {
    background-position: 100px 0;
}

.icon-3 {
    background-position: 200px 0;
}

.icon-4 {
    background-position: 100px 200px;
}

</style>