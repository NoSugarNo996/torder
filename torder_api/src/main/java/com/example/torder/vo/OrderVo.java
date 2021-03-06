package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: torder
 * @description: 交易
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:13
 **/
public class OrderVo extends BaseVo implements Serializable {
    public String getMy() {
        return my;
    }

    public void setMy(String my) {
        this.my = my;
    }

    private  String my;

    private Integer aud;

    public Integer getAud() {
        return aud;
    }

    public void setAud(Integer aud) {
        this.aud = aud;
    }
    private String code;
    /**
     * Database Column Remarks:
     *   交易ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_id
     *
     * @mbg.generated
     */
    private Integer orderId;

    /**
     * Database Column Remarks:
     *   交易甲方
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_partyA
     *
     * @mbg.generated
     */
    private String orderPartyA;
    private String orderPartyAName;

    /**
     * Database Column Remarks:
     *   交易乙方
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_partyB
     *
     * @mbg.generated
     */
    private String orderPartyB;
    private String orderPartyBName;

    /**
     * Database Column Remarks:
     *   交易状态
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_status
     *
     * @mbg.generated
     */
    private Integer orderStatus;
    private String orderStatusName;

    /**
     * Database Column Remarks:
     *   交易金额
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_money
     *
     * @mbg.generated
     */
    private Float orderMoney;

    /**
     * Database Column Remarks:
     *   任务ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.task_id
     *
     * @mbg.generated
     */
    private Integer taskId;

    /**
     * Database Column Remarks:
     *   交易开始时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_start
     *
     * @mbg.generated
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date orderStart;

    /**
     * Database Column Remarks:
     *   交易结束时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.order_end
     *
     * @mbg.generated
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date orderEnd;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.opr
     *
     * @mbg.generated
     */
    private Integer opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.other1
     *
     * @mbg.generated
     */
    private String other1;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.other2
     *
     * @mbg.generated
     */
    private String other2;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.other3
     *
     * @mbg.generated
     */
    private String other3;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order_info.other4
     *
     * @mbg.generated
     */
    private String other4;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table order_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_id
     *
     * @return the value of order_info.order_id
     *
     * @mbg.generated
     */
    public Integer getOrderId() {
        return orderId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_id
     *
     * @param orderId the value for order_info.order_id
     *
     * @mbg.generated
     */
    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_partyA
     *
     * @return the value of order_info.order_partyA
     *
     * @mbg.generated
     */
    public String getOrderPartyA() {
        return orderPartyA;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_partyA
     *
     * @param orderPartya the value for order_info.order_partyA
     *
     * @mbg.generated
     */
    public void setOrderPartyA(String orderPartya) {
        this.orderPartyA = orderPartya;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_partyB
     *
     * @return the value of order_info.order_partyB
     *
     * @mbg.generated
     */
    public String getOrderPartyB() {
        return orderPartyB;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_partyB
     *
     * @param orderPartyb the value for order_info.order_partyB
     *
     * @mbg.generated
     */
    public void setOrderPartyB(String orderPartyb) {
        this.orderPartyB = orderPartyb;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_status
     *
     * @return the value of order_info.order_status
     *
     * @mbg.generated
     */
    public Integer getOrderStatus() {
        return orderStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_status
     *
     * @param orderStatus the value for order_info.order_status
     *
     * @mbg.generated
     */
    public void setOrderStatus(Integer orderStatus) {
        this.orderStatus = orderStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_money
     *
     * @return the value of order_info.order_money
     *
     * @mbg.generated
     */
    public Float getOrderMoney() {
        return orderMoney;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_money
     *
     * @param orderMoney the value for order_info.order_money
     *
     * @mbg.generated
     */
    public void setOrderMoney(Float orderMoney) {
        this.orderMoney = orderMoney;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.task_id
     *
     * @return the value of order_info.task_id
     *
     * @mbg.generated
     */
    public Integer getTaskId() {
        return taskId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.task_id
     *
     * @param taskId the value for order_info.task_id
     *
     * @mbg.generated
     */
    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_start
     *
     * @return the value of order_info.order_start
     *
     * @mbg.generated
     */
    public Date getOrderStart() {
        return orderStart;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_start
     *
     * @param orderStart the value for order_info.order_start
     *
     * @mbg.generated
     */
    public void setOrderStart(Date orderStart) {
        this.orderStart = orderStart;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.order_end
     *
     * @return the value of order_info.order_end
     *
     * @mbg.generated
     */
    public Date getOrderEnd() {
        return orderEnd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.order_end
     *
     * @param orderEnd the value for order_info.order_end
     *
     * @mbg.generated
     */
    public void setOrderEnd(Date orderEnd) {
        this.orderEnd = orderEnd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.opr
     *
     * @return the value of order_info.opr
     *
     * @mbg.generated
     */
    public Integer getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.opr
     *
     * @param opr the value for order_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(Integer opr) {
        this.opr = opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.opr_time
     *
     * @return the value of order_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.opr_time
     *
     * @param oprTime the value for order_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.other1
     *
     * @return the value of order_info.other1
     *
     * @mbg.generated
     */
    public String getOther1() {
        return other1;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.other1
     *
     * @param other1 the value for order_info.other1
     *
     * @mbg.generated
     */
    public void setOther1(String other1) {
        this.other1 = other1 == null ? null : other1.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.other2
     *
     * @return the value of order_info.other2
     *
     * @mbg.generated
     */
    public String getOther2() {
        return other2;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.other2
     *
     * @param other2 the value for order_info.other2
     *
     * @mbg.generated
     */
    public void setOther2(String other2) {
        this.other2 = other2 == null ? null : other2.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.other3
     *
     * @return the value of order_info.other3
     *
     * @mbg.generated
     */
    public String getOther3() {
        return other3;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.other3
     *
     * @param other3 the value for order_info.other3
     *
     * @mbg.generated
     */
    public void setOther3(String other3) {
        this.other3 = other3 == null ? null : other3.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order_info.other4
     *
     * @return the value of order_info.other4
     *
     * @mbg.generated
     */
    public String getOther4() {
        return other4;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order_info.other4
     *
     * @param other4 the value for order_info.other4
     *
     * @mbg.generated
     */
    public void setOther4(String other4) {
        this.other4 = other4 == null ? null : other4.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", orderId=").append(orderId);
        sb.append(", orderStatus=").append(orderStatus);
        sb.append(", orderMoney=").append(orderMoney);
        sb.append(", taskId=").append(taskId);
        sb.append(", orderStart=").append(orderStart);
        sb.append(", orderEnd=").append(orderEnd);
        sb.append(", opr=").append(opr);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", other1=").append(other1);
        sb.append(", other2=").append(other2);
        sb.append(", other3=").append(other3);
        sb.append(", other4=").append(other4);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getOrderStatusName() {
        return orderStatusName;
    }

    public void setOrderStatusName(String orderStatusName) {
        this.orderStatusName = orderStatusName;
    }

    public String getOrderPartyBName() {
        return orderPartyBName;
    }

    public void setOrderPartyBName(String orderPartyBName) {
        this.orderPartyBName = orderPartyBName;
    }

    public String getOrderPartyAName() {
        return orderPartyAName;
    }

    public void setOrderPartyAName(String orderPartyAName) {
        this.orderPartyAName = orderPartyAName;
    }
}
