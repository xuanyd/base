package com.core.util;

<<<<<<< HEAD
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.HashMap;
import java.util.Map;

public class WebToken {

	public static String createToken(String username, String passord) throws Exception{
		Map<String, Object> map = new HashMap<>();
		map.put("alg", "HS256");
		map.put("type","JWT");
		String token = JWT.create().withHeader(map)
				.withClaim("name", "admin")
				.withClaim("password","123").sign(Algorithm.HMAC256(Constant.JWT_SECRET));
		return token;
	}

	public static void verifyToken(String token) throws Exception{
		JWTVerifier verifier = JWT.require(Algorithm.HMAC256(Constant.JWT_SECRET)).build();
		DecodedJWT jwt = verifier.verify(token);
		Map<String, Claim> claims = jwt.getClaims();
		System.out.println(claims.get("name").asString());
	}
	public static void main(String[] args) throws Exception{
		String token = createToken("admin", "123");
		verifyToken(token);
	}
=======
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;

import java.util.Date;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import com.core.util.Constant;

//http://blog.csdn.net/csdn_blog_lcl/article/details/73485463
//https://github.com/wangcantian/SecurityCommDemo
//http://blog.csdn.net/csdn_blog_lcl/article/details/73485463
public class WebToken {
	
	//该方法使用HS256算法和Secret:bankgl生成signKey
    private static Key getKeyInstance() {
        //We will sign our JavaWebToken with our ApiKey secret
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary("bankgl");
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
        return signingKey;
    }

    //使用HS256签名算法和生成的signingKey最终的Token,claims中是有效载荷
    public static String createJavaWebToken(Map<String, Object> claims) {
        return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS256, getKeyInstance()).compact();
    }

    //解析Token，同时也能验证Token，当验证失败返回null
    public static Map<String, Object> parserJavaWebToken(String jwt) {
        try {
            Map<String, Object> jwtClaims =
                    Jwts.parser().setSigningKey(getKeyInstance()).parseClaimsJws(jwt).getBody();
            return jwtClaims;
        } catch (Exception e) {
            log.error("json web token verify failed");
            return null;
        }
    }
>>>>>>> c3ecdbe0994b2f49cd34856e972302e2a6a8fe0c
}