import java.util.*;
import java.net.*;
import java.io.*;

public class WebCrawler {

    // 所有的网页url，需要更高效的去重可以考虑HashSet   
    ArrayList<String> allurlSet = new ArrayList<String>();
    // 未爬过的网页url 
    ArrayList<String> notCrawlurlSet = new ArrayList<String>();
    // 所有网页的url深度
    HashMap<String, Integer> depth = new HashMap<String, Integer>();

    int crawDepth  = 2; // 爬虫深度 
    int threadCount = 10; // 线程数量  
    int count = 0; // 表示有多少个线程处于wait状态 
    public static final Object signal = new Object();   // 线程间通信变量  

    public static void main(String[] args) {
        final WebCrawler wc = new WebCrawler();  
        wc.addUrl("https://www.cnblogs.com", 1);  
        long start= System.currentTimeMillis();  
        System.out.println("begin.........................................");  
        wc.begin();  
		while(true){  
            if(wc.notCrawlurlSet.isEmpty()&& Thread.activeCount() == 1||wc.count==wc.threadCount){  
                long end = System.currentTimeMillis();  
                System.out.println("tital"+wc.allurlSet.size()+"web sites");  
                System.out.println("total time"+(end-start)/1000+" s");  
                System.exit(1);  
                //              break;  
            }  
              
        }          
    }

    public void begin() {
        for(int i = 0; i < threadCount; i++) {
            new Thread(new Runnable(){
                public void run() {
                    while(true) {
    					String tmp = getAUrl();
    					if(tmp != null) {
    						crawler(tmp);
    					} else {
    						synchronized(signal) {
    							try{
    								count++;
    								System.out.println("there are "+ count + " threads wait");
    								signal.wait();
    							} catch (InterruptedException e) {  
    								e.printStackTrace(); 
    							}
    						}
    					} 
    				}
    			}
    		},"Thread-" + i).start();
    	}
    }

    public synchronized  String getAUrl() {  
        if(notCrawlurlSet.isEmpty())  
            return null;  
        String tmpAUrl;  
        // synchronized(notCrawlurlSet){  
            tmpAUrl= notCrawlurlSet.get(0);  
            notCrawlurlSet.remove(0);  
        //}  
        return tmpAUrl;  
    }  

 	public synchronized void  addUrl(String url,int d){  
        notCrawlurlSet.add(url);  
        allurlSet.add(url);  
        depth.put(url, d);  
    } 

    //  
    public void crawler(String sUrl) {
        URL url;
        System.out.println(sUrl);
        try {
            url = new URL(sUrl);
            URLConnection urlConnection = url.openConnection();
            urlConnection.addRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)");  
            InputStream is = url.openStream();
            BufferedReader bReader = new BufferedReader(new InputStreamReader(is));
            StringBuffer sb = new StringBuffer();
            String rLine = null;
            while((rLine=bReader.readLine())!=null) {
                sb.append(rLine);
                sb.append("/r/n");  
            }
            System.out.println(sb);
        } catch (Exception e) {
            e.printStackTrace();
        }
    } 

}