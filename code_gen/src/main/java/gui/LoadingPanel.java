package gui;
import javax.swing.JPanel;
import java.awt.Graphics;
import javax.swing.ImageIcon;
import java.awt.Toolkit;
import java.awt.Image;
import java.awt.Color;

public class LoadingPanel extends JPanel {
	
	public LoadingPanel() {
		this.setBackground(new Color(255,255,255));
	}
			
	@Override
	public void paint(Graphics g) {
		Image image = Toolkit.getDefaultToolkit().getImage("loading.gif");  
		int x = (this.getWidth()-5)/2;
		int y = (this.getHeight()-5)/2;
		g.drawImage(image, x, y, this);
	}

}