<template>
    <div :class="
        'board-item ' 
        + ( props.selected ? 'selected' : '' ) 
        + ( props.closed ? 'closed' : '' )
        + ( iconId ? ' icon icon-' + iconId : '')
    ">
    </div>
</template>

<script setup>
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
    border: 1px solid #262727;
    width: 48px;
    height: 48px;
    cursor: pointer;
}

.board-item i {
    touch-action: none;
}

.selected {
    background-color: #f56c6c;
}

.closed {
    background-color: #67c23a;
}

.icon {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.icon-1,
.icon-2,
.icon-3,
.icon-4 {
    background-image: url('../assets/icons.png');
    background-size: 150px 150px;
}

.icon-1 {
    background-position: 0 0;
}

.icon-2 {
    background-position: 50px 0;
}

.icon-3 {
    background-position: 100px 0;
}

.icon-4 {
    background-position: 150px 100px;
}

</style>