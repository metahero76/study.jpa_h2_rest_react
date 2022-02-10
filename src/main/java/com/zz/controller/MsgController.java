package com.zz.controller;

import com.zz.domain.DataJpaEntity;
import com.zz.service.MsgService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class MsgController {
    private final MsgService msgService;

    //security (라이브러리 적용) - CORS정책을 가지고 있음.(시큐리티가 CORS를 해제해야함 @CrossOrigin보다 먼저실행됨)
    //ResponseEntity로 감싸서 응답해 주는것이 Spring에서는 정석.
    @CrossOrigin //자바스크립트 크로스도메인 해제
    @PostMapping("/msg")
    public ResponseEntity<?> save(@RequestBody DataJpaEntity data){
        return new ResponseEntity<>(msgService.save(data), HttpStatus.OK);// 200
    }

    @CrossOrigin //자바스크립트 크로스도메인 해제
    @GetMapping("/msg")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(msgService.selectAll(), HttpStatus.OK);// 200
    }

    //Long타입을 대문자 랩핑클래스로 하면  null을 사용할수 있어서 훨씬 편함
    @CrossOrigin //자바스크립트 크로스도메인 해제
    @GetMapping("/msg/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return new ResponseEntity<>(msgService.selectOne(id), HttpStatus.OK);// 200
    }

    @CrossOrigin //자바스크립트 크로스도메인 해제
    @PutMapping("/msg/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody DataJpaEntity data){
        return new ResponseEntity<>(msgService.edit(id, data), HttpStatus.OK); //200
    }

    //? <= 자바제네릭
    @CrossOrigin //자바스크립트 크로스도메인 해제
    @DeleteMapping("/msg/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return new ResponseEntity<>(msgService.delete(id), HttpStatus.OK); //200
    }
}
