exports.default = (client, obs, mqtt, messages) => {
    client.on('message', (target, context, message, isBot) => {
        if (isBot) return;

        switch (message) {
            case '!donate':
                client.say(
                    target,
                    `Você pode me ajudar a ter uma "super" cnc para fazer plaquinhas em casa, só mandar um "salve" via picpay pra @kadubr, se conseguirmos a maquineta, faremos lives e videos para o canal mostrando como usar pra fazer as plaquinhas ;) - Valeu Grandão! (link da cnc: https://bit.ly/cncDU)`,
                );
                break;
            default:
                break;
        }
    });
};

