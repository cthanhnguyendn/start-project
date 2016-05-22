package com.web.controller;

import com.web.util.FileService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;

/**
 * Created by THANHBEO on 5/21/2016.
 */
@Controller
public class DowloadController {
    @Autowired
    FileService fileService;
    @RequestMapping(value = "/content/**", method = RequestMethod.GET)
    public void getFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        InputStream is = null;
        try {
            is = fileService.getFileContent(request.getRequestURI().replace("/content/",""));
        } catch (FileNotFoundException e) {
            try {
                is = fileService.getStaticImg("coming-soon.png");
            } catch (FileNotFoundException e1) {
                e1.printStackTrace();
            }
        }
        String c = URLConnection.guessContentTypeFromStream(is);
        response.setContentType(c);
        IOUtils.copy(is, response.getOutputStream());
        response.flushBuffer();

    }
    @RequestMapping(value = "/upload")
    @ResponseBody
    public ResponseEntity<List<String>> uplodFile(@RequestParam("files") MultipartFile[] uploadFiles) throws IOException {
        List<String> pathName = fileService.uploadMultipart(uploadFiles,"upload");
        return new ResponseEntity<List<String>>(pathName, HttpStatus.OK);
    }
}
