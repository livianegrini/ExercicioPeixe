var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var nemo;
var musica; 

function preload() {

    // Carregar fundo
    this.load.image('mar', 'assets/fundo_nemo.jpeg')

    // Carregar logo
    this.load.image('logo', 'assets/logo-inteli_branco.png')

    // Carregar Darla
    this.load.image('darla', 'assets/Darla.png')

    // Carregar Planta
    this.load.image('planta', 'assets/planta.png')

    // Carregar Nemo
    this.load.image('nemo', 'assets/peixes/nemo.png')

    // Carregar música
    this.load.audio("musica", "coloque o caminho da musica aq"); 
}

function create() {
    // Adicionar fundo na tela
    this.add.image(400, 300, 'mar');

    // Adicionar logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Adicionar Darla na tela
    this.add.image(620, 425, 'darla').setScale(0.8);

    // Adicionar Planta na tela
    this.add.image(100, 485, 'planta').setScale(0.2);

    this.add.text(250, 50, 'Procurando o Nemo 🔎', {
        fontSize: '45px',
        color: '#FFFFFF',
        fontFamily: 'Dancing Script',
        fontStyle: 'bold italic'
    });

    // Guardar nemo na variável
    nemo = this.add.image(400, 300, 'nemo').setOrigin(0.5, 0.5).setScale(0.16);

    // Transformando a variável
    nemo.setFlip(true, false);

}

function update() {
    // Adicionando controles no nemo
    nemo.x = this.input.x;
    nemo.y = this.input.y;
}