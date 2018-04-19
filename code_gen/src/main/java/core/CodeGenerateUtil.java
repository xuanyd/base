package core;

import freemarker.template.Template;
import org.apache.commons.lang3.StringUtils;
import java.io.*;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CodeGenerateUtil {
	
  private final String AUTHOR = "XuanYanDong";
  private final String CURRENT_DATE = "2017/05/03";
  private final String diskPath = "D://code_gen//";
  private final String tableName = "tm_project_quality_problem";
  private final String packageName = "com.evada.pm.process.manage";
  private final String tableAnnotation = "质量问题";

	public void generateControllerFile() throws Exception{
		final String suffix = "Controller.java";
		final String path = diskPath + replaceUnderLineAndUpperCase(tableName) + suffix;
		final String templateName = "Controller.ftl";
		File mapperFile = new File(path);
		Map<String,Object> dataMap = new HashMap<>();
		generateFileByTemplate(templateName,mapperFile,dataMap);	
	}

	private void generateFileByTemplate(final String templateName,
		File file, Map<String,Object> dataMap) throws Exception {
		Template template = FreeMarkerTemplateUtils.getTemplate(templateName);
		FileOutputStream fos = new FileOutputStream(file);
    dataMap.put("table_name_small",tableName);
    dataMap.put("table_name",replaceUnderLineAndUpperCase(tableName));
    dataMap.put("author",AUTHOR);
    dataMap.put("date",CURRENT_DATE);
    dataMap.put("package_name",packageName);
    dataMap.put("table_annotation",tableAnnotation);
    Writer out = new BufferedWriter(new OutputStreamWriter(fos, "utf-8"),10240);
    template.process(dataMap,out);
	}

	public String replaceUnderLineAndUpperCase(String str){
    StringBuffer sb = new StringBuffer();
    sb.append(str);
    int count = sb.indexOf("_");
    while (count!=0) {
      int num = sb.indexOf("_",count);
      count = num + 1;
      if (num != -1) {
        char ss = sb.charAt(count);
        char ia = (char) (ss - 32);
        sb.replace(count , count + 1,ia + "");
      }
    }
    String result = sb.toString().replaceAll("_","");
    return StringUtils.capitalize(result);
  }
}