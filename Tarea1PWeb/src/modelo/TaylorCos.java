package modelo;

public class TaylorCos {
	
	public static int factorial1(int num) {
		if(num == 0) {
			return 1;
		}
		
		else
			return num * factorial1(num - 1);
	}
	
	public static double coseno(int n, int x) {
		double numerador1 = (int) Math.pow(-1.0, n);
		int fact = (2 * n);
		int denominador = TaylorCos.factorial1(fact);
		
		double division = numerador1 / denominador;
		
		double radianes = Math.toRadians(x);
		double potencia = Math.pow(radianes, (2*n));
		
		double multi = division*potencia;
		return multi;
	}
	
	public double suma(int i, int x) {
		double acum = 0;
		for (int n = 0; n < i; n++) {
			acum += TaylorCos.coseno(n, x);
		}
		return acum;
	}
	
}
