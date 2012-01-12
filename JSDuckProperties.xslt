<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="text" encoding="UTF-8" indent="no" omit-xml-declaration="yes"/>

	<xsl:template match="/">
		<xsl:for-each select="/Content/Object/Group">
			<xsl:sort select="Name" order="ascending"/>
			<xsl:apply-templates select="." />
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="Group">
		<xsl:for-each select="Childs|Children">
			<xsl:apply-templates>
				<xsl:with-param name="group" select="../Name" />
			</xsl:apply-templates>
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="Prop">
		<xsl:param name="group"/>
		<xsl:variable name="type" select="Type" />
		/**
		<xsl:choose>
			<xsl:when test="Type = 'Custom' and Metadata/Value[@name = 'FlagDataTypeFilter']">
		* @property {<xsl:value-of select="Metadata/Value[@name = 'FlagDataTypeFilter']"/>} <xsl:value-of select="Name"/>
			</xsl:when>
			<xsl:otherwise>
		* @property {<xsl:value-of select="Type"/>} <xsl:value-of select="Name"/>
			</xsl:otherwise>
		</xsl:choose>
		<xsl:if test="Description">
		* <xsl:value-of select="Description" />
		</xsl:if>
		<xsl:if test="not(Description)">
			<xsl:text>&#xa0;</xsl:text>
		</xsl:if>
		<xsl:if test="JsDoc">
			<xsl:value-of select="JsDoc" />
		</xsl:if>
			<xsl:if test="Metadata/Value[@name = 'FlagScope'] = 'Runtime'">
			<xsl:text> (Runtime)</xsl:text>
		</xsl:if>
		<xsl:if test="Type = 'Combo'">
		* Possible values: <xsl:apply-templates select="Values">
			<xsl:with-param name="default" select="Default" />
		</xsl:apply-templates>
		</xsl:if>
		<xsl:for-each select="ancestor::Object">
		* @member <xsl:value-of select="@id"/>
		</xsl:for-each>
		*/
	</xsl:template>

	<xsl:template match="Values">
		<xsl:param name="default"/>
		<xsl:for-each select="Value">
		* - <xsl:value-of select="@desc"/><xsl:if test="@id = $default"> (default)</xsl:if>

			</xsl:for-each>
	</xsl:template>

</xsl:stylesheet>
