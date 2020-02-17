package modelo;

public class TaylorSen {
	
	public static int factorial(int num) {
		if(num == 0) {
			return 1;
		}
		
		else
			return num * factorial(num - 1);
	}

	public static double operacion(int n, int x) {
		
		double numerador = Math.pow(-1.0, (double)n);
		int fact = (2 * n) + 1;
		double denominador =  (double)TaylorSen.factorial(fact);
		double division = numerador / denominador; 
		double radianes = Math.toRadians((double)x);
		double resp = Math.pow(radianes, (double)fact);
		return division * resp;
	}
	
	public double suma(int i, int x) {
		double acum = 0;
		for (int n = 0; n < i; n++) {
			acum += TaylorSen.operacion(n, x);
		}
		
		return acum;
	}
	
		
}
		

