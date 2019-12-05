package com.cognizant.vendor.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="customer")
public class Customer {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="c_id")
    int cid;
	
	@NotNull
	@Column(name="cus_userid")
    String userid;
	
	@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-50 characters")
	@Column (name = "cus_firstname")	
	String firstname;
	
	@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-50 characters")
	@Column (name = "cus_lastname")
	String lastname;
	
	@NotNull
	//@Size(min=2,message="Age must contain 2 digits")
	@Column(name = "cus_age")
	Integer age;
	
	@NotNull
	@Column(name = "cus_gender")
	String gender;
	
	@Column(name = "cus_contactnumber")
	Integer contactnumber;
	
	@NotNull
	@Size(min=1,message="Pan can contain upto 15 digits")
	@Column(name = "cus_pan")
	String pan;
	
	@NotNull
	@Size(min=1,message="Aadhar number can contain upto 15 digits")
	@Column(name = "cus_aadharnumber")
	String aadharnumber;
	
	@NotNull
	@Size(min=1,message="Password can contain upto 15 digits")
	@Column(name = "cus_password")
	String password;

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(Integer contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getAadharnumber() {
		return aadharnumber;
	}

	public void setAadharnumber(String aadharnumber) {
		this.aadharnumber = aadharnumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", age=" + age + ", gender=" + gender + ", contactnumber=" + contactnumber + ", pan=" + pan
				+ ", aadharnumber=" + aadharnumber + ", password=" + password + "]";
	}

	public Customer(Integer cid, String userid,
			@NotNull @Size(min = 1, max = 30, message = "Name should be 1-50 characters") String firstname,
			@NotNull @Size(min = 1, max = 30, message = "Name should be 1-50 characters") String lastname,
			@NotNull Integer age, @NotNull String gender, Integer contactnumber,
			@NotNull @Size(min = 1, message = "Pan can contain upto 15 digits") String pan,
			@NotNull @Size(min = 1, message = "Aadhar number can contain upto 15 digits") String aadharnumber,
			@NotNull @Size(min = 1, message = "Password can contain upto 15 digits") String password) {
		super();
		this.cid = cid;
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.gender = gender;
		this.contactnumber = contactnumber;
		this.pan = pan;
		this.aadharnumber = aadharnumber;
		this.password = password;
	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	/*@JsonIgnore
	@ManyToOne
	@JoinTable (name = "user", joinColumns = @JoinColumn(name="us_userid"), inverseJoinColumns = @JoinColumn(name = "role_ro_id"))
	private List<USER> users;
*/
	
}

