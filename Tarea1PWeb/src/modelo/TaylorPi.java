package modelo;

public class TaylorPi {
	
	
	public double calcularPi(int n) {
		
		float contDenominador = 1;
        float signo = 2;
        float PI = 0;
        
        for (int i = 0; i < n; i++) {

            if (signo % 2 == 0) {

                PI += (1 / contDenominador);
                
                signo++; 
                contDenominador += 2;

            } else {
                PI -= (1 / contDenominador);
                
                signo++;
                contDenominador += 2;
            }

        }
        
        return PI*4;

	}
	
}
