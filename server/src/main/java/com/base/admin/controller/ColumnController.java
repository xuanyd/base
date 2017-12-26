package com.base.admin.controller;

import com.base.admin.service.ColumnService;
import com.core.util.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ColumnController {

	@Autowired
    private ColumnService columnService;

    @RequestMapping("admin/columnlist")
    public @ResponseBody Map columnList(HttpServletRequest request) throws Exception{
        Map<String, Object> retMap = new HashMap<>();
        String title = request.getParameter("title");
        String currentPage = request.getParameter("page");
        int page = 1;
        int pageSize = 10;
        if ((currentPage == null) || (currentPage.equals(""))) {
            page = 1;
        } else {
            page = Integer.valueOf(request.getParameter("page")).intValue();
        }
        PageInfo pageInfo = columnService.getColumnPage(title, page, pageSize);
        retMap.put("pageInfo", pageInfo);
        return retMap;
    }
}