package com.example.torder.util.text;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

public class Token {
	private static final String TOKEN_LIST_NAME = "tokenList";
	public static final String TOKEN_STRING_NAME = "token";
	public static final Map<String,String> map=new HashMap<>();
//	private static ArrayList getTokenList(HttpSession session) {
//		Object obj = session.getAttribute(TOKEN_LIST_NAME);
//		if (obj != null) {
//			return (ArrayList) obj;
//		} else {
//			ArrayList tokenList = new ArrayList();
//			session.setAttribute(TOKEN_LIST_NAME, tokenList);
//			return tokenList;
//		}
//	}

	public static void saveTokenString(String tokenStr, String userId) {
		map.put(userId,tokenStr);
	}

	private static String generateTokenString() {
		return new Long(System.currentTimeMillis()).toString();
	}

	/** */
	/**
	 * Generate a token string, and save the string in session, then return the
	 * token string.
	 * 
	 * @param HttpSession session
	 * @return a token string used for enforcing a single request for a particular
	 *         transaction.
	 */

	public static String getTokenString(HttpSession session) {
		String tokenStr = generateTokenString();
	//	saveTokenString(tokenStr, session);
		return tokenStr;
	}

	/** */
	/**
	 * check whether token string is valid. if session contains the token string,
	 * return true. otherwise, return false.
	 * 
	 * @param String      tokenStr
	 * @param HttpSession session
	 * @return true: session contains tokenStr; false: session is null or tokenStr
	 *         is id not in session
	 */

	public static boolean isTokenStringValid(String tokenStr, String userId) {
		boolean valid = false;
		if (map.get(userId) != null) {
			if (map.get(userId).equals(tokenStr)) {
				valid = true;
				//tokenList.remove(tokenStr);
			}
		}
		return valid;
	}

	public static boolean logout(String userId){
		map.remove(userId);
		return true;
	}

}
