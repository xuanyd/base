package com.base.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class UploadController {
    @RequestMapping(value="/uploadFile.do")
    public void uploadFile(@RequestParam(value = "file", required = false) MultipartFile file,
                           HttpServletRequest request, HttpServletResponse response) {
    }
    }
