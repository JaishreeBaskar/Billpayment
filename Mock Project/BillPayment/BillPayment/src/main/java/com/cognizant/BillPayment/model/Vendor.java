package com.cognizant.BillPayment.model;

import java.sql.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="vendor")
public class Vendor {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@NotNull
	@Column (name = "ve_id")	
	int id;
	
	@NotNull
	@Column(name="ve_nameofthevendor")
    String nov;
	
	@NotNull
	@Column (name = "ve_companyregnumber")	
	String comp;
	
	@NotNull
	@Column (name = "ve_vendortype")	
	String vendortype;
	
	@NotNull
	@Column (name = "ve_address")	
	String address;
	
	@NotNull
	@Column (name = "ve_country")	
	String country;
	
	@NotNull
	@Column (name = "ve_state")	
	String state;
	
	@NotNull
	@Column (name = "ve_emailaddress")	
	String ea;
	
	@NotNull
	@Column (name = "ve_contactnumber")	
    int cn;
	
	@NotNull
	@Column (name = "ve_website")	
	String ws;
	
	@NotNull
	@Column (name = "ve_certificateissueddate")	
	Date cid;
	
	@NotNull
	@Column (name = "ve_certificatevaliditydate")	
	Date cvd;
	
	@NotNull
	@Column (name = "ve_yearofestablishment")	
	Date yoe;
	
	@NotNull
	@Column (name = "ve_paymentgateway")	
	String pay;
	
	@NotNull
	@Column (name = "ve_password")	
	String password;
	
	@Column (name = "ve_status")	
	Boolean status;


	/*@JsonIgnore
	@OneToMany
	@JoinTable (name = "user", joinColumns = @JoinColumn(name="us_userid"), inverseJoinColumns = @JoinColumn(name = "role_ro_id"))
	private List<USER> users;*/

	public String getNov() {
		return nov;
	}

	public void setNov(String nov) {
		this.nov = nov;
	}

	public String getComp() {
		return comp;
	}

	public void setComp(String comp) {
		this.comp = comp;
	}

	public String getVendortype() {
		return vendortype;
	}

	public void setVendortype(String vendortype) {
		this.vendortype = vendortype;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getEa() {
		return ea;
	}

	public void setEa(String ea) {
		this.ea = ea;
	}

	public int getCn() {
		return cn;
	}

	public void setCn(int cn) {
		this.cn = cn;
	}

	public String getWs() {
		return ws;
	}

	public void setWs(String ws) {
		this.ws = ws;
	}

	public Date getCid() {
		return cid;
	}

	public void setCid(Date cid) {
		this.cid = cid;
	}

	public Date getCvd() {
		return cvd;
	}

	public void setCvd(Date cvd) {
		this.cvd = cvd;
	}
	
	public Date getYoe() {
		return yoe;
	}

	public void setYoe(Date yoe) {
		this.yoe = yoe;
	}

	public String getPay() {
		return pay;
	}

	public void setPay(String pay) {
		this.pay = pay;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	
	/*public List<USER> getUsers() {
		return users;
	}

	public void setUsers(List<USER> users) {
		this.users = users;
	}*/

	public Boolean isStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Vendor [id=" + id + ", nov=" + nov + ", comp=" + comp + ", vendortype=" + vendortype + ", address="
				+ address + ", country=" + country + ", state=" + state + ", ea=" + ea + ", cn=" + cn + ", ws=" + ws
				+ ", cid=" + cid + ", cvd=" + cvd + ", yoe=" + yoe + ", pay=" + pay + ", password=" + password
				+ ", status=" + status + "]";
	}

	public Vendor(@NotNull int id, @NotNull String nov, @NotNull String comp, @NotNull String vendortype,
			@NotNull String address, @NotNull String country, @NotNull String state, @NotNull String ea,
			@NotNull int cn, @NotNull String ws, @NotNull Date cid, @NotNull Date cvd, @NotNull Date yoe,
			@NotNull String pay, @NotNull String password, Boolean status) {
		super();
		this.id = id;
		this.nov = nov;
		this.comp = comp;
		this.vendortype = vendortype;
		this.address = address;
		this.country = country;
		this.state = state;
		this.ea = ea;
		this.cn = cn;
		this.ws = ws;
		this.cid = cid;
		this.cvd = cvd;
		this.yoe = yoe;
		this.pay = pay;
		this.password = password;
		this.status = status;
	}
	
}
