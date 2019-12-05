package com.cognizant.authenticationservice.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnore;

	@Entity
	@Table(name="user")
	public class USER {
		
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="u_id")
	    int uid;
		
		@NotNull
		@Column(name="us_userid")
	    String userid;
		
		@NotNull
		@Size(min=1,message="Password can contain upto 15 digits")
		@Column(name = "us_password")
		String password;
		
		@JsonIgnore
		@ManyToMany
		@JoinTable (name = "user_role", joinColumns = @JoinColumn(name="user_u_id"), inverseJoinColumns = @JoinColumn(name = "role_ro_id"))
		private List<Role> roles;

		public Integer getUid() {
			return uid;
		}

		public void setUid(Integer uid) {
			this.uid = uid;
		}

		public String getUserid() {
			return userid;
		}

		public void setUserid(String userid) {
			this.userid = userid;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		@Override
		public String toString() {
			return "USER [uid=" + uid + ", userid=" + userid + ", password=" + password + ", roles=" + roles + "]";
		}

		public USER() {
			super();
			// TODO Auto-generated constructor stub
		}

		public USER(Integer uid, String userid,
				@NotNull @Size(min = 1, message = "Password can contain upto 15 digits") String password,
				List<Role> roles) {
			super();
			this.uid = uid;
			this.userid = userid;
			this.password = password;
			this.roles = roles;
		}

		public List<Role> getRoles() {
			return roles;
		}

		public void setRoles(List<Role> roles) {
			this.roles = roles;
		} 
		
}
