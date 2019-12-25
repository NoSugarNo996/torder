package com.example.torder.mapper;

import com.example.torder.domain.Favorites;
import com.example.torder.vo.AdvertisingVo;
import com.example.torder.vo.FavoritesVo;

import java.util.List;

public interface FavoritesMapper {
    List findList(FavoritesVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer favId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    int insert(Favorites record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    int insertSelective(Favorites record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    FavoritesVo selectByPrimaryKey(Integer favId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Favorites record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Favorites record);
}