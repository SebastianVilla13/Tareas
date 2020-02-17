package modelo;

public class TaylorE {
	
	public static int factorial1(int num) {
		if(num == 0) {
			return 1;
		}
		
		else
			return num * factorial1(num - 1);
	}
	
	public static double division(int n, int x) {
		double radianes = Math.toRadians(x);
		double numerador = Math.pow(radianes, n);
		
		double denominador = factorial1(n);
		
		return numerador/ denominador;
	}
	
	public double suma(int i, int x) {
		double acum = 0;
		for (int n = 0; n < i; n++) {
			acum += TaylorE.division(n, x);
		}
		return acum;
	}

}
