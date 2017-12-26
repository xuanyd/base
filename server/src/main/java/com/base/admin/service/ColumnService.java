package com.base.admin.service;

import com.base.admin.dao.ColumnDao;
import com.core.util.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ColumnService {

    @Autowired
    private ColumnDao columnDao;

    public PageInfo getColumnPage(String title, int page, int pageSize) throws Exception{
        PageInfo pageInfo = new PageInfo();
        int start = (page -1) * pageSize;
        int size = pageSize;
        pageInfo.setPageSize(pageSize);
        pageInfo.setCurrentPage(page);
        pageInfo.setTotalCount(columnDao.getColumnCount(title));
        pageInfo.setInfoList(columnDao.getColumnList(title, start, size));
        return pageInfo;
    }
}
