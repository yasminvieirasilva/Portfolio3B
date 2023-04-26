EditText entrada;
TextView saida;
int numero;
int tentativa = 0;
Random gerador = new Random();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide();
        entrada = findViewById(R.id.entrada);
        saida = findViewById(R.id.saida);
    }
    public void gerar (View v){
        tentativa = 0;
        numero = gerador.nextInt(100) + 1;
        saida.setText("Numero gerado");
        entrada. setText("");
    }
    public void confirma (View v){
        int digitado = Integer.parseInt(entrada.getText().toString());
        if (digitado > numero){
        }
        else if (digitado < numero){

        }
        else{

        }
    }
}
