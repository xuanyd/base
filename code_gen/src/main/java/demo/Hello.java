package demo;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import util.*;
import core.*;

public class Hello {

	public static ArrayList<String> dontGenTables = new ArrayList<String>();

	public static void main(String[] args) {
		dontGenTables.add("sql_code");
		dontGenTables.add("t_check_info");
		dontGenTables.add("t_check_template");
		dontGenTables.add("t_m_menu");
		dontGenTables.add("t_m_permission");
		dontGenTables.add("t_m_role");
		dontGenTables.add("t_m_role_perm");
		dontGenTables.add("t_m_user");
		dontGenTables.add("t_n_column");
		dontGenTables.add("t_n_links");
		dontGenTables.add("t_n_notice");
		dontGenTables.add("test_clk");

		DBUtil util = new DBUtil();
		CodeGenerateUtil genUtil = new CodeGenerateUtil();
		List<Map<String, Object>> dataList = util.queryList(
			"select TABLE_NAME from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'test';", null);
		for (Map<String, Object> tableMap : dataList ) {
			String tableName = tableMap.get("TABLE_NAME").toString();
			if(dontGenTables.contains(tableName)) {
				System.out.println("jump over " + tableName +  "'s code generate");
			} else {
				try {
					if(tableName.indexOf("_") > 0){
						tableName = tableName.substring(tableName.lastIndexOf("_"), tableName.length());
					}
					System.out.println("Starting generage: " + tableName);
					//genUtil.generateControllerFile();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
}