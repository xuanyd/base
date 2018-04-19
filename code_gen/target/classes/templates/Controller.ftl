package com.base.admin.controller;

import com.base.admin.service.${table_name}Service;
import com.core.util.Constant;
import com.core.util.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
* ${table_annotation}
* @author ${author}
* @date ${date}
*/
@Controller
public class ${table_name}Controller {

    @Autowired
    private ${table_name}Service ${table_name}Service;

    @RequestMapping("admin/${table_name}list")
    public @ResponseBody Map ${table_name}List(HttpServletRequest request, 
      @RequestBody Map<String, String> map) {
      Map<String, Object> retMap = new HashMap<>();
      String title = map.get("title");
      String currentPage = map.get("page");
      int page = 1;

      int pageSize = 10;
      if ( currentPage == null || currentPage.equals("") ) {
          page = 1;
      } else {
          page = Integer.valueOf(currentPage).intValue();
      }
      try{
          PageInfo pageInfo = ${table_name}Service.get${table_name}Page(title, page, pageSize);
          retMap.put("pageInfo", pageInfo);
          retMap.put("flag", Constant.RESCODE_SUCCESS);
      } catch (Exception e) {
          e.printStackTrace();
          retMap.put("flag", Constant.RESCODE_EXCEPTION);
      }
      return retMap;
    }

    @RequestMapping("admin/${table_name}-add")
    public  
    @ResponseBody Map ${table_name}Add(HttpServletRequest request,
                                        @RequestBody Map<String,String> map) {
      Map<String, Object> retMap = new HashMap<>();
      String ${table_name}Type = map.get("${table_name}Type");
      String title = map.get("title");
      String content = map.get("content");
      try {
          boolean addFlag = ${table_name}Service.${table_name}Add(${table_name}Type, title, content);
          if(addFlag) {
            retMap.put("flag", Constant.RESCODE_SUCCESS);
          } else {
            retMap.put("flag", Constant.RESCODE_EXCEPTION);
            retMap.put("msg", Constant.RESCODE_ADD_ERROR);
          }
      } catch (Exception e) {
        e.printStackTrace();
        retMap.put("flag", Constant.RESCODE_EXCEPTION);
        retMap.put("msg", Constant.RESCODE_ADD_EXCEPTION);
      }
      return retMap;
    }

    @RequestMapping("admin/${table_name}-edit")
    public  @ResponseBody Map ${table_name}Edit(HttpServletRequest request,
                                        @RequestBody Map<String,String> map) {
      Map<String, Object> retMap = new HashMap<>();
      String id = map.get("id");
      String ${table_name}Type = map.get("${table_name}Type");
      String title = map.get("title");
      String content = map.get("content");
      try {
        boolean addFlag = ${table_name}Service.${table_name}Edit(id, ${table_name}Type, title, content);
        if(addFlag) {
          retMap.put("flag", Constant.RESCODE_SUCCESS);
        } else {
          retMap.put("flag", Constant.RESCODE_EXCEPTION);
          retMap.put("msg", "修改失败");
        }
      } catch (Exception e) {
        e.printStackTrace();
        retMap.put("flag", Constant.RESCODE_EXCEPTION);
        retMap.put("msg", Constant.RESCODE_UPDATE_EXCEPTION);
      }
      return retMap;
    }

    @RequestMapping("admin/${table_name}-detail")
    public @ResponseBody Map<String, Object> ${table_name}Detail(HttpServletRequest request,
                                                          @RequestBody Map<String,String> map){
      Map<String, Object> retMap = new HashMap<>();
      String id = map.get("id");
      try {
        Map<String, Object> ${table_name}Info = ${table_name}Service.get${table_name}Info(id);
        retMap.put("flag", Constant.RESCODE_SUCCESS);
        retMap.put("${table_name}Info", ${table_name}Info);
      } catch (Exception e) {
        e.printStackTrace();
        retMap.put("flag", Constant.RESCODE_EXCEPTION);
        retMap.put("msg",  Constant.RESCODE_SEARCH_EXCEPTION);
      }
      return retMap;
    }

    @RequestMapping("admin/${table_name}-delete")
    public @ResponseBody Map<String, Object> ${table_name}Delete(HttpServletRequest request,
                                                          @RequestBody Map<String,String> map){
      Map<String, Object> retMap = new HashMap<>();
      String id = map.get("id");
      try {
        boolean deleteFlat = ${table_name}Service.${table_name}Delete(id);
        if(deleteFlat)
          retMap.put("flag", Constant.RESCODE_SUCCESS);
        else {
          retMap.put("flag", Constant.RESCODE_DELETE_ERROR);
        }
      } catch (Exception e) {
        e.printStackTrace();
        retMap.put("flag", Constant.RESCODE_EXCEPTION);
        retMap.put("msg", Constant.RESCODE_DELETE_EXCEPTION);
      }
      return retMap;
    }
}
