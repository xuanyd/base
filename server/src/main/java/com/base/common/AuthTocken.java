package com.base.common;

import com.sun.jna.platform.win32.Guid;

public class AuthToken {
	public static void main(String[] args) {
		System.out.println("123");
	}

	private static Key getKeyInstance() {
		SignatureAlgorithm  signatureAlgorithm = signatureAlgorithm.HS256;
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary("APP");
		Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
		return signingKey;
	}

	public static String createJavaWebToken(Map<String, Object> claims) {
		return Jwts.builder().setClaims(claims).
			signWith(SignatureAlgorithm.HS256, getKeyInstance()).compact();
	}

	public static Map<String, Object> verifyJavaWebToken(String jwt) {
    try {
        Map<String, Object> jwtClaims =
        	Jwts.parser().setSigningKey(getKeyInstance()).parseClaimsJws(jwt).getBody();
        return jwtClaims;
    } catch (Exception e) {
        log.error("json web token verify failed");
        return null;
    }
	}
} 