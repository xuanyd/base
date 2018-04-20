package gui;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JButton;
import javax.swing.JList;
import java.awt.Color;

public class CheckTablePanel extends JPanel{
	
	JPanel southPanel;
	JPanel centerPanel;
	JButton nextBtn;

	public CheckTablePanel() {
		centerPanel = new JPanel();
		southPanel = new JPanel(); 
		nextBtn = new JButton("Next Step");
		this.setLayout(new BorderLayout());
		JList jList = new JList(new String[]{"test1","test2", "test3"});
		centerPanel.add(jList);
		southPanel.setBackground(new Color(255,255,255));
		centerPanel.setBackground(new Color(255,255,255));
		this.setBackground(new Color(255,255,255));
		southPanel.add(nextBtn);
		this.add(centerPanel, BorderLayout.CENTER);	
		this.add(southPanel, BorderLayout.SOUTH);	
	}
}