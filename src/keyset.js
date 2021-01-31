export const keysetOptions = {
    leftHand: {
        id: 'left-hand',
        title: 'Left hand (home row)',
        responseKeys: ['a', 's', 'd', 'f', 'space'],
        triggerKey: 'l',
    },
    righHand: {
        id: 'right-hand',
        title: 'Right hand (home row)',
        responseKeys: ['space', 'j', 'k', 'l', ';'],
        triggerKey: 's',
    },
};

let chosenKeyset = keysetOptions.leftHand;

export const getChosenKeyset = () => chosenKeyset;

export const setChosenKeyset = (keyset) => {
    chosenKeyset = keyset;
};
