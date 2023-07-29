namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyServiceSchema

	/// <exclude/>
	public class UsrRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyServiceSchema(UsrRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f5cd6352-0f8d-40dc-b546-61a4d5e2311b");
			Name = "UsrRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("414589f0-064c-4f65-9654-449346ab1bac");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,203,173,84,40,78,45,42,203,76,78,85,40,207,204,201,81,72,74,85,200,72,45,74,213,3,2,5,77,77,0,3,32,246,225,30,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f5cd6352-0f8d-40dc-b546-61a4d5e2311b"));
		}

		#endregion

	}

	#endregion

}

