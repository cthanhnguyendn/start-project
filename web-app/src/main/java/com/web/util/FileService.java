package com.web.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by THANHBEO on 5/21/2016.
 */
@Service
public class FileService {
    final String CONTENT_ROOT = "content";
    @Autowired
    private ResourceLoader resourceLoader;
    public String storeFile(File file,String dir){
        String finalFileName = CONTENT_ROOT+File.pathSeparator+dir+File.pathSeparator+file.getName();
        File contentFile  = new File(CONTENT_ROOT+File.pathSeparator+dir+File.pathSeparator+file.getName());
        contentFile.mkdir();
        try {
            FileCopyUtils.copy(file,contentFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return finalFileName;
    }
    public String storeFile(byte[] file,String fileName,String dir){
        String finalFileName = CONTENT_ROOT+File.separator+dir+File.separator+fileName;
        File contentFile  = new File(finalFileName);
        File directory = new File(CONTENT_ROOT+File.separator+dir);
        if(!directory.exists()){
            directory.mkdirs();
        }
        System.out.println(directory.getAbsolutePath());
        try {
            BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(contentFile));
            out.write(file);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return finalFileName;
    }

    public InputStream getFileContent(String fileName) throws FileNotFoundException {
        String filePath = CONTENT_ROOT+File.separator+fileName;
        InputStream is = new FileInputStream(filePath);
        return new BufferedInputStream(is);
    }

    public List<String> uploadMultipart(MultipartFile[] multipartFiles, String dir) throws IOException {
        List<String> result = new ArrayList<>();
        for(MultipartFile  infile:multipartFiles){
            System.out.println(infile.getOriginalFilename());
            result.add(storeFile(infile.getBytes(),infile.getOriginalFilename(),dir));
        }
        return result;
    }

    public InputStream getStaticImg(String path) throws IOException {
        Resource resource = resourceLoader.getResource("classpath:"+path);
        return resource.getInputStream();
    }
}
