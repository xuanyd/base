package com.base.admin.controller;

import com.base.admin.service.NoticeService;
import com.core.util.Constant;
import com.core.util.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping("admin/noticelist")
    public @ResponseBody Map noticeList(HttpServletRequest request) {
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
        try{
            PageInfo pageInfo = noticeService.getNoticePage(title, page, pageSize);
            retMap.put("pageInfo", pageInfo);
            retMap.put("flag", Constant.RESCODE_SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            retMap.put("flag", Constant.RESCODE_EXCEPTION);
        }
        return retMap;
    }

    @RequestMapping("admin/notice-add")
    public  @ResponseBody Map noticeAdd(HttpServletRequest request) {
        Map<String, Object> retMap = new HashMap<>();
        String noticeType = request.getParameter("noticeType");
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        try {
            boolean addFlag = noticeService.noticeAdd(noticeType, title, content);
            if(addFlag) {
                retMap.put("flag", Constant.RESCODE_SUCCESS);
            } else {
                retMap.put("flag", Constant.RESCODE_EXCEPTION);
                retMap.put("msg", "添加失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
            retMap.put("flag", Constant.RESCODE_EXCEPTION);
            retMap.put("msg", "执行添加异常");
        }
        return retMap;
    }
}
