package com.zz.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity // 서버 실행시에 Object Relation Mapping 테이블이 h2에 생성됨
public class DataJpaEntity {
    @Id //Pk를 해당 변수로 하겠다는 뜻.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 번호 자동증가 전략을 따라가겠다.
    private Long id;

    private String title;
    private String text;
}
