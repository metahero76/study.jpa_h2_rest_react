package com.zz.service;

import com.zz.domain.DataJpaEntity;
import com.zz.domain.DataJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음.
//Service로 등록하면 레파지토리에 여러개의 함수 실행 -> commit or rollback가능
@RequiredArgsConstructor
@Service
public class MsgService {
    private final DataJpaRepository dataJpaRepository;

    @Transactional // 서비스 함수가 종료될때 commit할지 rollback할지 트랜잭션 관리하겠다.
    public DataJpaEntity save(DataJpaEntity book){
        return dataJpaRepository.save(book);
    }

    // JPA변경감지라는 내부기능 비활성화 시킴, update시의 정합성을 유지해줌
    // insert의 유령데이터현상(팬텀현상)은 못막음
    @Transactional(readOnly = true)
    public DataJpaEntity selectOne(Long id){
        return dataJpaRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!"));
    }

    @Transactional(readOnly = true)
    public List<DataJpaEntity> selectAll(){
        return dataJpaRepository.findAll();
    }

    @Transactional
    public DataJpaEntity edit(Long id, DataJpaEntity data){
        //더티체킹 update치기

        //영속화(book오브젝트) 스프링 메모리가 entity를 들고있음
        DataJpaEntity bookEntity = dataJpaRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));
        bookEntity.setTitle(data.getTitle());
        bookEntity.setText(data.getText());
        return bookEntity;
    }// 함수의 종료시 => 트랜잭션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush) => commit ==> 더티체킹 (이렇게 하는게 좋음)

    @Transactional
    public String delete(Long id){
        dataJpaRepository.deleteById(id);// 오류가 터지면 Exception을 타니까...
        return "ok";
    }
}
