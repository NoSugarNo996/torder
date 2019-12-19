/**
 * 
 */
package com.example.torder.service;

import com.example.torder.vo.CommonWorkflowVo;

import java.util.List;

/**
 * 服务类。
 * 
 * @author wuzhaobin
 *
 */
public interface CommonWorkflowService {
	List<CommonWorkflowVo> selectAll();
}
