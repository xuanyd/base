package util;

import java.io.InputStream;
import java.io.FileInputStream;  
import java.sql.Connection;  
import java.sql.DriverManager;  
import java.sql.ResultSet;  
import java.sql.SQLException;  
import java.sql.Statement;  
import java.util.Properties; 

public class DBConnector {

	private static String host;  
  private static String user;  
  private static String password; 

	static {
		try {
			String filePath = System.getProperty("user.dir")+"/application.properties";
			Properties prop = new Properties();
			prop.load(new FileInputStream(filePath));
			Class.forName(prop.getProperty("driverClassName")); 
			host = prop.getProperty("host");  
      user = prop.getProperty("user");  
      password = prop.getProperty("password");  
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection(){
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(host,user,password);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	public static void close(Connection conn, Statement stat, ResultSet rs) {
		if(conn != null){  
      try {
      	conn.close();
      } catch (SQLException e) {
      	e.printStackTrace();
      }  
    }  
    if(stat != null){  
      try {
      	stat.close();
      } catch (SQLException e) {
      	e.printStackTrace();
      }  
    }  
    if(rs != null){  
      try {
      	rs.close();
      } catch (SQLException e) {
      	e.printStackTrace();
      }  
    }  
	}
}