package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table question_info
 */
public class QAVo extends BaseVo implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_info.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_info.question_name
     *
     * @mbg.generated
     */
    private String questionName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_info.question_answer
     *
     * @mbg.generated
     */
    private String questionAnswer;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table question_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_info.id
     *
     * @return the value of question_info.id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_info.id
     *
     * @param id the value for question_info.id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_info.question_name
     *
     * @return the value of question_info.question_name
     *
     * @mbg.generated
     */
    public String getQuestionName() {
        return questionName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_info.question_name
     *
     * @param questionName the value for question_info.question_name
     *
     * @mbg.generated
     */
    public void setQuestionName(String questionName) {
        this.questionName = questionName == null ? null : questionName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_info.question_answer
     *
     * @return the value of question_info.question_answer
     *
     * @mbg.generated
     */
    public String getQuestionAnswer() {
        return questionAnswer;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_info.question_answer
     *
     * @param questionAnswer the value for question_info.question_answer
     *
     * @mbg.generated
     */
    public void setQuestionAnswer(String questionAnswer) {
        this.questionAnswer = questionAnswer == null ? null : questionAnswer.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table question_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", questionName=").append(questionName);
        sb.append(", questionAnswer=").append(questionAnswer);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}