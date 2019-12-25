package com.example.torder.api;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.RoleRightVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author huangjiali
 * @date 2019/12/20 3:03 下午
 */
@RequestMapping("/roleright")
public interface RoleRightApi {
    /**
     * 添加角色权限
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int addRoleRight(@RequestBody RoleRightVo obj);

    /**
     * 或得角色权限列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findRRList(@RequestBody RoleRightVo obj);

    /**
     * 删除角色权限信息
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    int deleteRoleRight(@RequestParam("id") Integer id);

    /**
     * 更新角色权限信息
     * @param obj
     * @return
     */
    @RequestMapping("/update")
    int updateRoleRight(@RequestBody RoleRightVo obj);

    /**
     * 获得角色权限详情
     * @param id
     * @return
     */
    @RequestMapping("/getRoleRightInfo")
    RoleRightVo getById(@RequestParam("id") Integer id);
}
