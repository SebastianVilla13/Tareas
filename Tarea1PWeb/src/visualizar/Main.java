package visualizar;

import java.util.Scanner;

import modelo.TaylorCos;
import modelo.TaylorE;
import modelo.TaylorPi;
import modelo.TaylorSen;

public class Main {

	public static void main(String[] args) {
		
		int n, x;
		
		Scanner leer = new Scanner(System.in);
		
		System.out.println("1. Serie de Pi");
		System.out.println("2. Serie de Seno");
		System.out.println("3. Serie de e");
		System.out.println("4. Serie de Coseno");
		
		int a = leer.nextInt();
		
		switch(a) {
		case 1:
			TaylorPi pi = new TaylorPi();
			System.out.println("Digite un numero para acercarce al numero pi");
			n = leer.nextInt();
			System.out.println(pi.calcularPi(n));
			break;
		case 2:
			System.out.println("Ingrese el numero de repeticiones ");
			n = leer.nextInt();
			System.out.println("Ingrese el numero de grados ");
			x = leer.nextInt();
			TaylorSen sen = new TaylorSen();
			System.out.println(sen.suma(n, x));
			break;
		case 3:
			System.out.println("Ingrese el numero de repeticiones ");
			n = leer.nextInt();
			System.out.println("Ingrese el numero de grados ");
			x = leer.nextInt();
			TaylorE e = new TaylorE();
			System.out.println(e.suma(n, x));
			break;	
		case 4:
			System.out.println("Ingrese el numero de repeticiones ");
			n = leer.nextInt();
			System.out.println("Ingrese el numero de grados ");
			x = leer.nextInt();
			TaylorCos cos = new TaylorCos();
			System.out.println(cos.suma(n, x));
			break;
		default:
			System.out.println("Opcion invalida");
			
		}

	}

}
