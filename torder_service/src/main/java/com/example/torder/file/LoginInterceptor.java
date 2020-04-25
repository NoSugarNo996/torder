package com.example.torder.file;

import com.example.torder.util.text.Token;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import com.alibaba.fastjson.JSON;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * @author huangjiali
 */
@Component
public class LoginInterceptor implements HandlerInterceptor{

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
		
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	
	/**
	 * 进入pagelist验证token
	 */
	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object arg2) throws Exception {
		String path = req.getRequestURI();
		if (path.startsWith("/file/")) {
			return true;
		}
		String token=req.getHeader("token");
		String userId=req.getHeader("userId");
		Map<String, Object> resultMap=new HashMap<String, Object>();
		if(token!=null && !"".equals(token.trim()) &&userId!=null && !"".equals(userId.trim())){
			if (Token.isTokenStringValid(token,userId)) {
				return true;
			} else{
				resultMap.put("success", "0");
				resultMap.put("msg", "身份验证失败");
				String result=JSON.toJSONString(resultMap);
				resp.getWriter().print(result);
				resp.setStatus(401);
			}
		}else {
			resultMap.put("success", "-1");
			resultMap.put("msg", "权限不足");
			String result=JSON.toJSONString(resultMap);
			resp.getWriter().print(result);
			resp.setStatus(401);
		}
		return false;
	}

}
