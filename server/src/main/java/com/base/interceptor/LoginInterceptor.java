package com.base.interceptor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;


public class LoginInterceptor implements HandlerInterceptor{


    /**
     * after
     */
    @Override
    public void afterCompletion(HttpServletRequest req,
                                HttpServletResponse resp, Object arg2, Exception ex)
            throws Exception {
    }

    /**
     * post
     */
    @Override
    public void postHandle(HttpServletRequest req, HttpServletResponse resp,
                           Object arg2, ModelAndView model) throws Exception {

    }

    /**
     * pre
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object arg2) throws Exception {
        response.setHeader("Access-Control-Allow-Origin","*");
        response.setHeader("Access-Control-Allow-Methods","POST");
        response.setHeader("Access-Control-Allow-Headers","Access-Control");
        response.setHeader("Allow","POST");

        /*String url=request.getRequestURL().toString();

        //验证是否为管理员
        if(url.contains("admin")){
            if(url.contains("admin/login")){
                return true;
            } else {
                Map<String, String> adminUserInfo = (Map<String, String>) request.getSession(true).getAttribute("adminLoginInfo");
                if(adminUserInfo == null || adminUserInfo.isEmpty()){
                    request.getRequestDispatcher("/pages/admin/login.jsp").forward(request, response);
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            if(url.contains("login.html")){
                return true;
            }
            Map<String, String> userInfo = (Map<String, String>) request.getSession(true).getAttribute("loginInfo");
            if(userInfo == null || userInfo.isEmpty()){
                request.getRequestDispatcher("/pages/login.jsp").forward(request, response);
                return false;
            } else {
                return true;
            }
        }*/
        return true;
    }
}

