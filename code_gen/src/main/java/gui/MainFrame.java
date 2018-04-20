package gui;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import javax.swing.ImageIcon;
import java.awt.BorderLayout;

public class MainFrame {

	public JFrame jFrame;

	public MainFrame() {
		jFrame = new JFrame();
	}

	public JPanel initLoadingPanel() {
		LoadingPanel loadingPanel = new LoadingPanel();
		return loadingPanel;
	}	

	public JPanel initCheckTablePanel() {
		CheckTablePanel ckPanel = new CheckTablePanel();
		return ckPanel;
	}

	public void show(){
		try {  
      javax.swing.UIManager.setLookAndFeel(  
        javax.swing.UIManager.getSystemLookAndFeelClassName());  
    } catch (Exception e) {  
      e.printStackTrace();  
    }  
		ImageIcon icon=new ImageIcon("m.png");   
		jFrame.setIconImage(icon.getImage()); 
		jFrame.setSize(762, 427);
		jFrame.setBackground(new Color(255,255,255));
		jFrame.setTitle("Code generator");
		jFrame.setLocationRelativeTo(null);
		jFrame.setContentPane(initCheckTablePanel());
		jFrame.setVisible(true);
		jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
	}
}