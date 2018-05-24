public class ThreadJoin extends Thread {

	private String name;
	public ThreadJoin(String name) {
		super(name);
		this.name = name;
	}

	public void run() {
        System.out.println(Thread.currentThread().getName() + " Thread start run ! ");  
 		for (int i = 0; i < 5; i++) {  
            System.out.println("child thread "+name + "run : " + i);  
            try {  
                sleep((int) Math.random() * 10);  
            } catch (InterruptedException e) {  
                e.printStackTrace();  
            }  
        }
        System.out.println(Thread.currentThread().getName() + " Thread stop run ! ");    
	}

	public static void main(String[] args) {
		System.out.println(Thread.currentThread().getName() + " Main Thread start run ! ");    
		Thread1 mTh1=new Thread1("A");  
        Thread1 mTh2=new Thread1("B");  
        mTh1.start();  
        mTh2.start();
     	try {  
            mTh1.join();  
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
        try {  
            mTh2.join();  
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }    
        System.out.println(Thread.currentThread().getName() + " Main Thread complete ! ");
	}

} 