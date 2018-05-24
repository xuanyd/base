import java.io.InputStream;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.io.FileOutputStream;


public class Chapter01 {

	public static void main(String[] args) throws Exception {
		String systemDir = System.getProperty("user.dir");
		String filePath = systemDir + "\\input-file.txt";
		read(filePath);
		write(filePath, "hello! \n");
		
	}

	public static void read(String filePath) throws Exception {
		InputStream input = new FileInputStream(filePath);
		int data = input.read(); 
		while(data != -1) {
			System.out.print((char)data);
			data = input.read();
		}
		input.close();
	}

	public static void write(String filePath, String data) throws Exception {
		OutputStream output = new FileOutputStream(filePath, true);
		output.write(data.getBytes());
		output.close();
	}
}