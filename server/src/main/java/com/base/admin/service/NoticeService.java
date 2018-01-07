package com.base.admin.service;

import com.base.admin.dao.NoticeDao;
import com.core.util.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    public PageInfo getNoticePage(String title, int page, int pageSize) throws Exception{
        PageInfo pageInfo = new PageInfo();
        int start = (page -1) * pageSize;
        int size = pageSize;
        pageInfo.setPageSize(pageSize);
        pageInfo.setCurrentPage(page);
        pageInfo.setTotalCount(noticeDao.getNoticeCount(title));
        pageInfo.setInfoList(noticeDao.getNoticeList(title, start, size));
        return pageInfo;
    }

    public boolean noticeAdd(String noticeType, String title, String content) throws Exception{
        return noticeDao.noticeAdd(noticeType, title, content);
    }
}
