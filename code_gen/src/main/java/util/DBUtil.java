package util;

import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.ArrayList;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class DBUtil {
	Connection conn = null;
	PreparedStatement stat = null;
	ResultSet rs = null;

	public List<Map<String, Object>> queryList(String sql, 
		Map<String, Object> params){
		List<Map<String, Object>> retList = new ArrayList<Map<String, Object>>();
		try{
			conn = DBConnector.getConnection();
			stat = conn.prepareStatement(sql);
			rs = stat.executeQuery();
			while(rs.next()) {
				Map<String, Object> itemMap = new HashMap<String, Object>();
				ResultSetMetaData metaData = rs.getMetaData();
				int columnCount = metaData.getColumnCount();
				for(int i=0; i< columnCount; i++){
					String colName = metaData.getColumnName(i+1);
					itemMap.put(colName, rs.getObject(colName));
				}
				retList.add(itemMap);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBConnector.close(conn, stat, rs);
		}
		return retList;
	}
}