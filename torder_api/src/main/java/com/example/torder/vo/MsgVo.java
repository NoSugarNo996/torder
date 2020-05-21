package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table msg_info
 */
public class MsgVo extends BaseVo implements Serializable {

   private String msgPublisherName;

    public String getMsgPublisherName() {
        return msgPublisherName;
    }

    public void setMsgPublisherName(String msgPublisherName) {
        this.msgPublisherName = msgPublisherName;
    }

    public String getMsgAccepterName() {
        return msgAccepterName;
    }

    public void setMsgAccepterName(String msgAccepterName) {
        this.msgAccepterName = msgAccepterName;
    }

    private String msgAccepterName;
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_id
     *
     * @mbg.generated
     */
    private Integer msgId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_code
     *
     * @mbg.generated
     */
    private String msgCode;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_type
     *
     * @mbg.generated
     */
    private String msgType;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_title
     *
     * @mbg.generated
     */
    private String msgTitle;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_time
     *
     * @mbg.generated
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date msgTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_status
     *
     * @mbg.generated
     */
    private String msgStatus;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_publisher
     *
     * @mbg.generated
     */
    private String msgPublisher;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_info.msg_accepter
     *
     * @mbg.generated
     */
    private String msgAccepter;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table msg_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_id
     *
     * @return the value of msg_info.msg_id
     *
     * @mbg.generated
     */
    public Integer getMsgId() {
        return msgId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_id
     *
     * @param msgId the value for msg_info.msg_id
     *
     * @mbg.generated
     */
    public void setMsgId(Integer msgId) {
        this.msgId = msgId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_code
     *
     * @return the value of msg_info.msg_code
     *
     * @mbg.generated
     */
    public String getMsgCode() {
        return msgCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_code
     *
     * @param msgCode the value for msg_info.msg_code
     *
     * @mbg.generated
     */
    public void setMsgCode(String msgCode) {
        this.msgCode = msgCode == null ? null : msgCode.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_type
     *
     * @return the value of msg_info.msg_type
     *
     * @mbg.generated
     */
    public String getMsgType() {
        return msgType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_type
     *
     * @param msgType the value for msg_info.msg_type
     *
     * @mbg.generated
     */
    public void setMsgType(String msgType) {
        this.msgType = msgType == null ? null : msgType.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_title
     *
     * @return the value of msg_info.msg_title
     *
     * @mbg.generated
     */
    public String getMsgTitle() {
        return msgTitle;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_title
     *
     * @param msgTitle the value for msg_info.msg_title
     *
     * @mbg.generated
     */
    public void setMsgTitle(String msgTitle) {
        this.msgTitle = msgTitle == null ? null : msgTitle.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_time
     *
     * @return the value of msg_info.msg_time
     *
     * @mbg.generated
     */
    public Date getMsgTime() {
        return msgTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_time
     *
     * @param msgTime the value for msg_info.msg_time
     *
     * @mbg.generated
     */
    public void setMsgTime(Date msgTime) {
        this.msgTime = msgTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_status
     *
     * @return the value of msg_info.msg_status
     *
     * @mbg.generated
     */
    public String getMsgStatus() {
        return msgStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_status
     *
     * @param msgStatus the value for msg_info.msg_status
     *
     * @mbg.generated
     */
    public void setMsgStatus(String msgStatus) {
        this.msgStatus = msgStatus == null ? null : msgStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_publisher
     *
     * @return the value of msg_info.msg_publisher
     *
     * @mbg.generated
     */
    public String getMsgPublisher() {
        return msgPublisher;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_publisher
     *
     * @param msgPublisher the value for msg_info.msg_publisher
     *
     * @mbg.generated
     */
    public void setMsgPublisher(String msgPublisher) {
        this.msgPublisher = msgPublisher == null ? null : msgPublisher.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_info.msg_accepter
     *
     * @return the value of msg_info.msg_accepter
     *
     * @mbg.generated
     */
    public String getMsgAccepter() {
        return msgAccepter;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_info.msg_accepter
     *
     * @param msgAccepter the value for msg_info.msg_accepter
     *
     * @mbg.generated
     */
    public void setMsgAccepter(String msgAccepter) {
        this.msgAccepter = msgAccepter == null ? null : msgAccepter.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table msg_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", msgId=").append(msgId);
        sb.append(", msgCode=").append(msgCode);
        sb.append(", msgType=").append(msgType);
        sb.append(", msgTitle=").append(msgTitle);
        sb.append(", msgTime=").append(msgTime);
        sb.append(", msgStatus=").append(msgStatus);
        sb.append(", msgPublisher=").append(msgPublisher);
        sb.append(", msgAccepter=").append(msgAccepter);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}