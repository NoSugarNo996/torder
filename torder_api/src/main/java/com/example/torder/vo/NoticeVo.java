package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: torder
 * @description: 公告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:12
 **/
public class NoticeVo extends BaseVo implements Serializable {
    /**
     * Database Column Remarks:
     *   公告ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_id
     *
     * @mbg.generated
     */
    private Integer noticeId;

    /**
     * Database Column Remarks:
     *   公告标题
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_title
     *
     * @mbg.generated
     */
    private String noticeTitle;

    /**
     * Database Column Remarks:
     *   公告开始时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_start
     *
     * @mbg.generated
     */
    private Date noticeStart;

    /**
     * Database Column Remarks:
     *   公告结束时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_end
     *
     * @mbg.generated
     */
    private Date noticeEnd;

    /**
     * Database Column Remarks:
     *   公告内容
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_des
     *
     * @mbg.generated
     */
    private String noticeDes;

    /**
     * Database Column Remarks:
     *   公告接收对象
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.notice_sendto
     *
     * @mbg.generated
     */
    private String noticeSendto;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.opr
     *
     * @mbg.generated
     */
    private Integer opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.other
     *
     * @mbg.generated
     */
    private String other;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column notice_info.others
     *
     * @mbg.generated
     */
    private String others;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_id
     *
     * @return the value of notice_info.notice_id
     *
     * @mbg.generated
     */
    public Integer getNoticeId() {
        return noticeId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_id
     *
     * @param noticeId the value for notice_info.notice_id
     *
     * @mbg.generated
     */
    public void setNoticeId(Integer noticeId) {
        this.noticeId = noticeId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_title
     *
     * @return the value of notice_info.notice_title
     *
     * @mbg.generated
     */
    public String getNoticeTitle() {
        return noticeTitle;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_title
     *
     * @param noticeTitle the value for notice_info.notice_title
     *
     * @mbg.generated
     */
    public void setNoticeTitle(String noticeTitle) {
        this.noticeTitle = noticeTitle == null ? null : noticeTitle.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_start
     *
     * @return the value of notice_info.notice_start
     *
     * @mbg.generated
     */
    public Date getNoticeStart() {
        return noticeStart;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_start
     *
     * @param noticeStart the value for notice_info.notice_start
     *
     * @mbg.generated
     */
    public void setNoticeStart(Date noticeStart) {
        this.noticeStart = noticeStart;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_end
     *
     * @return the value of notice_info.notice_end
     *
     * @mbg.generated
     */
    public Date getNoticeEnd() {
        return noticeEnd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_end
     *
     * @param noticeEnd the value for notice_info.notice_end
     *
     * @mbg.generated
     */
    public void setNoticeEnd(Date noticeEnd) {
        this.noticeEnd = noticeEnd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_des
     *
     * @return the value of notice_info.notice_des
     *
     * @mbg.generated
     */
    public String getNoticeDes() {
        return noticeDes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_des
     *
     * @param noticeDes the value for notice_info.notice_des
     *
     * @mbg.generated
     */
    public void setNoticeDes(String noticeDes) {
        this.noticeDes = noticeDes == null ? null : noticeDes.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.notice_sendto
     *
     * @return the value of notice_info.notice_sendto
     *
     * @mbg.generated
     */
    public String getNoticeSendto() {
        return noticeSendto;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.notice_sendto
     *
     * @param noticeSendto the value for notice_info.notice_sendto
     *
     * @mbg.generated
     */
    public void setNoticeSendto(String noticeSendto) {
        this.noticeSendto = noticeSendto == null ? null : noticeSendto.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.opr
     *
     * @return the value of notice_info.opr
     *
     * @mbg.generated
     */
    public Integer getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.opr
     *
     * @param opr the value for notice_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(Integer opr) {
        this.opr = opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.opr_time
     *
     * @return the value of notice_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.opr_time
     *
     * @param oprTime the value for notice_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.other
     *
     * @return the value of notice_info.other
     *
     * @mbg.generated
     */
    public String getOther() {
        return other;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.other
     *
     * @param other the value for notice_info.other
     *
     * @mbg.generated
     */
    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column notice_info.others
     *
     * @return the value of notice_info.others
     *
     * @mbg.generated
     */
    public String getOthers() {
        return others;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column notice_info.others
     *
     * @param others the value for notice_info.others
     *
     * @mbg.generated
     */
    public void setOthers(String others) {
        this.others = others == null ? null : others.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", noticeId=").append(noticeId);
        sb.append(", noticeTitle=").append(noticeTitle);
        sb.append(", noticeStart=").append(noticeStart);
        sb.append(", noticeEnd=").append(noticeEnd);
        sb.append(", noticeDes=").append(noticeDes);
        sb.append(", noticeSendto=").append(noticeSendto);
        sb.append(", opr=").append(opr);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", other=").append(other);
        sb.append(", others=").append(others);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}
