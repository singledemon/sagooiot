// =================================================================================
// Code generated by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package entity

import (
	"github.com/gogf/gf/v2/os/gtime"
)

// NoticeConfig is the golang structure for table notice_config.
type NoticeConfig struct {
	Id          string      `json:"id"          description:""`
	Title       string      `json:"title"       description:""`
	SendGateway string      `json:"sendGateway" description:""`
	Types       int         `json:"types"       description:""`
	CreatedAt   *gtime.Time `json:"createdAt"   description:""`
}