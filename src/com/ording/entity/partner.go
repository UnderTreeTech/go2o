/**
 * Copyright 2014 @ ops.
 * name :
 * author : newmin
 * date : 2013-11-14 21:47
 * description :
 * history :
 */

package entity

import (
	"time"
)

//合作商
type Partner struct {
	Id            int       `db:"id" pk:"yes" auto:"yes"`
	Usr           string    `db:"usr"`
	Pwd           string    `db:"pwd"`
	Secret        string    `db:"secret"`
	Name          string    `db:"name"`
	Logo          string    `db:"logo"`
	Expires       time.Time `db:"expires"`
	Tel           string    `db:"tel"`
	Phone         string    `db:"phone"`
	Address       string    `db:"address"`
	JoinTime      time.Time `db:"join_time"`
	UpdateTime    time.Time `db:"update_time"`
	LoginTime     time.Time `db:"login_time"`
	LastLoginTime time.Time `db:"last_login_time"`
}
